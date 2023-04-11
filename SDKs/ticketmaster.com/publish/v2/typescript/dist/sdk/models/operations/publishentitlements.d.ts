import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PublishEntitlementsRequest extends SpeakeasyBase {
    /**
     * Entitlements information to add to the entity
     */
    entitlement: shared.Entitlement;
    /**
     * Unique correlation id to be able to trace the request in our system
     */
    tmpsCorrelationId: string;
}
export declare class PublishEntitlementsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
