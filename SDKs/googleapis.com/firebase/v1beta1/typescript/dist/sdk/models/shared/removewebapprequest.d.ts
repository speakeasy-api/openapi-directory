import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemoveWebAppRequest extends SpeakeasyBase {
    /**
     * If set to true, and the App is not found, the request will succeed but no action will be taken on the server.
     */
    allowMissing?: boolean;
    /**
     * Checksum provided in the WebApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Determines whether to _immediately_ delete the WebApp. If set to true, the App is immediately deleted from the Project and cannot be restored to the Project. If not set, defaults to false, which means the App will be set to expire in 30 days. Within the 30 days, the App may be restored to the Project using UndeleteWebApp
     */
    immediate?: boolean;
    /**
     * If set to true, the request is only validated. The App will _not_ be removed.
     */
    validateOnly?: boolean;
}
