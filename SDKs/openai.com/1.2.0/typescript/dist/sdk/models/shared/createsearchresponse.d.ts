import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateSearchResponseData extends SpeakeasyBase {
    document?: number;
    object?: string;
    score?: number;
}
/**
 * OK
 */
export declare class CreateSearchResponse extends SpeakeasyBase {
    data?: CreateSearchResponseData[];
    model?: string;
    object?: string;
}
