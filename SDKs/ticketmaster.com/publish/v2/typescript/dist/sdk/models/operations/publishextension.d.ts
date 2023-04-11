import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PublishExtensionRequest extends SpeakeasyBase {
    /**
     * Extension information to add to the entity
     */
    extensionData: shared.ExtensionData;
    /**
     * Unique correlation id to be able to trace the request in our system
     */
    tmpsCorrelationId: string;
}
export declare class PublishExtensionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
