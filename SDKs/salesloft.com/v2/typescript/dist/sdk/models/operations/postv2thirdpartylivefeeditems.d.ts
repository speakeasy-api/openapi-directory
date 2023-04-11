import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2ThirdPartyLiveFeedItemsRequestBody extends SpeakeasyBase {
    /**
     * Equality filters that are applied to the event_occurred_at field. A single filter can be used by itself or combined with other filters to create a range.
     *
     * @remarks
     * ---CUSTOM---
     * {"keys":[{"description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision.","name":"gt","type":"iso8601 string"},{"description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision.","name":"gte","type":"iso8601 string"},{"description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision.","name":"lt","type":"iso8601 string"},{"description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision.","name":"lte","type":"iso8601 string"}],"type":"object"}
     *
     */
    eventOccurredAt: string;
    /**
     * Uniquely provided string specific to this event. This should be a value which can't be duplicated between external systems, meaning that an id is not sufficient.
     */
    idempotencyKey: string;
    /**
     * The message that relates to the subject. This message should start with a lower-case past-tense verb and end with a period (e.g. "received a package."). When live feed items are displayed to users, the subject's name is concatenated with the message and a joining space. Only <a> HTML tags with an "href" attribute are allowed. Other attributes and tags will be stripped.
     */
    message: string;
    /**
     * The ID of the subject of the live feed item (i.e. the "person" id).
     */
    subjectId: number;
    /**
     * The type of the subject of the live feed item. Currently only "person" is supported.
     */
    subjectType: string;
    /**
     * The guid for the user that this live feed item should be shown to.
     */
    userGuid: string;
}
export declare class PostV2ThirdPartyLiveFeedItemsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
