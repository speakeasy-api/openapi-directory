import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostOwnershipInstallRequest extends SpeakeasyBase {
    /**
     * The id of the App being owned
     */
    appId: string;
    /**
     * A custom JSON object to attach to this ownership record
     */
    customData?: string;
    /**
     * A custom model that will override the app's default model for this install
     */
    model?: string;
    /**
     * The id of the model associated with this ownership request
     */
    modelId?: string;
    /**
     * The id of the User requesting to own the App
     */
    userId: string;
}
export declare class PostOwnershipInstallResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
