import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The user access token
**/
export declare class VideoEditorTokenResponseToken extends SpeakeasyBase {
    expirationDate?: number;
    value?: string;
}
/**
 * The response that includes the user access token and its expiration date
**/
export declare class VideoEditorTokenResponse extends SpeakeasyBase {
    token: VideoEditorTokenResponseToken;
}
