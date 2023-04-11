import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostOwnershipUninstallOwnershipIdRequest extends SpeakeasyBase {
    /**
     * True if this app will require payment to be re-installed. Default is false
     */
    cancelOwnership?: boolean;
    /**
     * A custom JSON object to attach to this ownership record
     */
    customData?: string;
    /**
     * The id of the ownership to be unintalled
     */
    ownershipId: string;
    /**
     * The id of the User requesting to uninstall the App
     */
    userId: string;
}
export declare class PostOwnershipUninstallOwnershipIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
