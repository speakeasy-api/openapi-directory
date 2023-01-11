import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to register a new instance of the video editor
**/
export declare class RegisterVideoEditorRequest extends SpeakeasyBase {
    imageSubscriptionId: string;
    videoSubscriptionId: string;
    webhookUrl: string;
}
