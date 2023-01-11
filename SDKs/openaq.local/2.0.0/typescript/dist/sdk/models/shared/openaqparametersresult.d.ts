import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersRow } from "./parametersrow";
export declare class OpenAqParametersResultMeta extends SpeakeasyBase {
    found?: number;
    license?: string;
    limit?: number;
    name?: string;
    page?: number;
    website?: string;
}
export declare class OpenAqParametersResult extends SpeakeasyBase {
    meta?: OpenAqParametersResultMeta;
    results: ParametersRow[];
}
