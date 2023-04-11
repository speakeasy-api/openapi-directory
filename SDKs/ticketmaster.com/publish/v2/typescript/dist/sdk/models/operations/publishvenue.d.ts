import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PublishVenueRequest extends SpeakeasyBase {
    /**
     * Unique correlation id to be able to trace the request in our system
     */
    tmpsCorrelationId: string;
    /**
     * Venue
     */
    venue: shared.Venue;
}
export declare class PublishVenueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
