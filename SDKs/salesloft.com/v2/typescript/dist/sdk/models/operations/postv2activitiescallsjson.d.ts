import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2ActivitiesCallsJsonRequestBody extends SpeakeasyBase {
    /**
     * Action that this call is being logged for. This will validate that the action is still
     *
     * @remarks
     * valid before completing it. The same action can never be successfully passed twice to this endpoint. The
     * action must have a type of 'phone'.
     *
     */
    actionId?: number;
    /**
     * CRM specific parameters. Some parameters are required on a per-team basis. Consume the
     *
     * @remarks
     * CrmActivityFields endpoint to receive a list of valid parameters. The "field" property
     * is passed as the key of this object, and the value of this object is the value that you
     * would like to set.
     *
     * If CrmActivityField has a non-null value, then that value must be submitted, or excluded
     * from API calls, as these values are automatically applied.
     *
     */
    crmParams?: Record<string, any>;
    /**
     * The disposition of the call. Can be required on a per-team basis. Must be present in the disposition list.
     */
    disposition?: string;
    /**
     * The length of the call, in seconds
     */
    duration?: number;
    /**
     * CallDataRecord associations that will become linked to the created call. It is possible to pass
     *
     * @remarks
     * multiple CallDataRecord ids in this field; this can be used to represent multiple phone calls
     * that made up a single call.
     *
     * Any call data record that is used must not already be linked to a call. It is not possible
     * to link a call data record to multiple calls, and it is not possible to re-assign a call data
     * record to a different call.
     *
     */
    linkedCallDataRecordIds?: number[];
    /**
     * Notes to log for the call. This is similar to the notes endpoint, but ensures that the notes get synced to the user's CRM
     */
    notes?: string;
    /**
     * The ID of the person whom this call will be logged for
     */
    personId: number;
    /**
     * The sentiment of the call. Can be required on a per-team basis. Must be present in the sentiment list.
     */
    sentiment?: string;
    /**
     * The phone number that was called
     */
    to?: string;
    /**
     * Guid of the user whom this call should be logged for. Defaults to the authenticated user. Only team admins can pass another user's guid
     */
    userGuid?: string;
}
export declare class PostV2ActivitiesCallsJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
