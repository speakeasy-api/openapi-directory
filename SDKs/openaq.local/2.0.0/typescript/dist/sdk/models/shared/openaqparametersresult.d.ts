import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersRow } from "./parametersrow";
export declare class OpenAQParametersResultMeta extends SpeakeasyBase {
    found?: number;
    license?: string;
    limit?: number;
    name?: string;
    page?: number;
    website?: string;
}
/**
 * Successful Response
 */
export declare class OpenAQParametersResult extends SpeakeasyBase {
    meta?: OpenAQParametersResultMeta;
    results: ParametersRow[];
}
