import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SpellcheckRequest extends SpeakeasyBase {
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
    /**
     * Search term, e.g., person, place, topic...
     *
     * @remarks
     *
     */
    q: string;
}
export declare class SpellcheckResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * OK
     */
    spellCheckResponse?: shared.SpellCheckResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
