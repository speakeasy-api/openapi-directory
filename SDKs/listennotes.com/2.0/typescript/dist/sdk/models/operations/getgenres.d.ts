import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Just show top level genres? If 1, yes, just show top level genres. If 0, no, show all genres.
 *
 * @remarks
 *
 */
export declare enum GetGenresTopLevelOnlyEnum {
    Zero = "0",
    One = "1"
}
export declare class GetGenresRequest extends SpeakeasyBase {
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
    /**
     * Just show top level genres? If 1, yes, just show top level genres. If 0, no, show all genres.
     *
     * @remarks
     *
     */
    topLevelOnly?: GetGenresTopLevelOnlyEnum;
}
export declare class GetGenresResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getGenresResponse?: shared.GetGenresResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
