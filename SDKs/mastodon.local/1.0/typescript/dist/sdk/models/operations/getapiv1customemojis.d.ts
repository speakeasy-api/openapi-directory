import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1CustomEmojisResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of Emojis
     */
    emojis?: shared.Emoji[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
