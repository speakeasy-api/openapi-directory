import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for StartWorkstation.
 */
export declare class StartWorkstationRequest extends SpeakeasyBase {
    /**
     * If set, the request will be rejected if the latest version of the workstation on the server does not have this etag.
     */
    etag?: string;
    /**
     * If set, validate the request and preview the review, but do not actually apply it.
     */
    validateOnly?: boolean;
}
