import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WikiContentRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the wiki.
     */
    wikiId: string;
}
export declare class WikiContentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
