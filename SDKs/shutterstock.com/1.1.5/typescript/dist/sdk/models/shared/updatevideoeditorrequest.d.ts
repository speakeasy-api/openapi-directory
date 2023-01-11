import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to update an existing instance of the video editor
**/
export declare class UpdateVideoEditorRequest extends SpeakeasyBase {
    imageSubscriptionId?: string;
    videoSubscriptionId?: string;
    webhookUrl?: string;
}
