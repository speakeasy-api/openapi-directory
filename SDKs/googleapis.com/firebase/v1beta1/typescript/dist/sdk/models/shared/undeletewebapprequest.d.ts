import { SpeakeasyBase } from "../../../internal/utils";
export declare class UndeleteWebAppRequest extends SpeakeasyBase {
    /**
     * Checksum provided in the WebApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * If set to true, the request is only validated. The App will _not_ be undeleted.
     */
    validateOnly?: boolean;
}
