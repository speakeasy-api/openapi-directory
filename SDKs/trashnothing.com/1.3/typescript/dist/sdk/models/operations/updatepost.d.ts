import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdatePostRequestBody extends SpeakeasyBase {
    /**
     * A longer description of the item(s).
     */
    content?: string;
    /**
     * When the post should expire.   Any amount of time from 1 hour to 90 days can be provided.  To pass a number of hours, provide the number of hours prefixed by 'h' (eg. 1hr 24hr). To pass a number of days, provide the number of days prefixed by 'd' (eg. 1d 90d). <br /><br /> Note that updates may not appear instantly after submission because the volunteer moderators of many groups may have additional automatic or manual review processes in place that can cause delays.  So with short expirations (eg. < 8 hours), there is a chance that the post may expire before the update is approved and so it will never be published.
     *
     * @remarks
     * <br><br> NOTE: The max expiration for a post is 90 days after the post is published.  So updates to posts that try to set an longer expiration will be silently changed to just apply the max expiration.
     *
     */
    expiresIn?: string;
    /**
     * If set to 1, the post will be posted with the Fair Offer Policy (only valid for offer posts - see https://trashnothing.com/fair_offer_policy ).
     */
    fairOffer?: number;
    /**
     * The latitude corresponding to the location description provided. <br /><br /> If latitude and longitude are not provided, an attempt will be made to automatically geocode the location.  If the location is unable to be geocoded, the post will be rejected* and will have to be resubmitted with a latitude and longitude corresponding to the location or resubmitted with a different location that can be automatically geocoded. <br /><br /> NOTE: The latitude and longitude should NOT be the users' exact location because we don't want to publicize their exact location unless their location description is their full address (which is not recommended). <br /><br /> *When a post is rejected because it can't be geocoded, the returned error will have its identifier property set to 'unknown-location'.
     *
     * @remarks
     *
     */
    latitude?: number;
    /**
     * A short location description.
     */
    location: string;
    /**
     * The longitude corresponding to the location description provided. (see the NOTE in latitude description)
     */
    longitude?: number;
    /**
     * A comma separated list of the IDs of the photos that should be attached to this post.
     */
    photoIds?: string;
    /**
     * A JSON string representing a permanent object that the client persists and modifies based on warnings returned by the update submission process and user input.  Some warnings returned after submitting  an update have a preference_key string property so that users can opt out of those warnings in the future.  To save this opt-out preference, set the property indicated by the preference_key in the preferences object (eg. preferences[preference_key] = 1).  The preferences object is never modified by the server - it is up to the client to initialize, modify and persist the preferences object.
     *
     * @remarks
     *
     */
    preferences?: string;
    /**
     * For wanted posts only. If set to 1, the wanted post will show that the poster intends to resell any items that they receive in response to this post.  Posters must declare if they intend to resell items.
     *
     * @remarks
     *
     */
    reselling?: string;
    /**
     * A JSON string representing a temporary object that is used to store data about the update process for a single post.  The first time a post update is submitted, session should be a new empty object (eg. '{}').  The session object should be persisted by the client until that update is successfully submitted and then it  can be discarded so that the next update will start over with a new empty session object.  Every time an update is submitted and the response indicates that the submission was not successful, the session object returned in the response should override the clients copy of the session.
     *
     * @remarks
     *
     */
    session: string;
    /**
     * A short description of the item(s).
     */
    title: string;
    /**
     * The type of post.  One of: offer, wanted
     *
     * @remarks
     *
     */
    type: string;
}
export declare class UpdatePostRequest extends SpeakeasyBase {
    requestBody: UpdatePostRequestBody;
    /**
     * The ID of the post to update.
     */
    postId: string;
}
/**
 * Post update result.
 */
export declare class UpdatePost200ApplicationJSON extends SpeakeasyBase {
    /**
     * When an error or warning is returned, this will contain a short string representing the type of error or warning that occurred.  Is null on success.
     *
     * @remarks
     *
     */
    identifier?: string;
    /**
     * Contains text describing the reason a post update was not successful.  Is null on success.
     *
     * @remarks
     *
     */
    message?: string;
    /**
     * Certain types of warnings can be opted out of.  These warnings will set preference_key to a string that can be  set in the preferences object by the client to opt out of that type of warning in the future (see the description of the preferences parameter for more details).  Is null for errors, success and warnings that can't be opted out of.
     *
     * @remarks
     *
     */
    preferenceKey?: string;
    /**
     * One of: success, error, warning. <br /><br /> A success result indicates that the post update was submitted successfully. Note that post updates may not appear instantly after submission because the volunteer moderators of many groups may have additional automatic or manual review processes in place that can cause delays. <br /><br /> An error result indicates that there is an error with the post that should be shown to the user and the message property will contain text describing the error. <br /><br /> A warning result indicates that there is a warning about the post update to show the user and the message property will contain a string describing the warning.   A warning result doesn't prevent a post update from being submitted, to continue the submission process after a warning result, just re-submit (with the updated session object) to temporarily override that specific warning.
     *
     * @remarks
     *
     */
    result?: string;
    /**
     * The updated session object that should override the client's copy of the session that was passed in the session parameter. Is null on success.
     *
     * @remarks
     *
     */
    session?: Record<string, string>;
}
export declare class UpdatePostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Post update result.
     */
    updatePost200ApplicationJSONObject?: UpdatePost200ApplicationJSON;
}
