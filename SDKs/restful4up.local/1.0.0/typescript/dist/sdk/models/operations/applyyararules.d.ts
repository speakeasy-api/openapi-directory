import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApplyYaraRulesRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare enum ApplyYaraRulesRequestBodyIsUnpackingRequiredEnum {
    True = "true",
    False = "false"
}
export declare class ApplyYaraRulesRequestBody extends SpeakeasyBase {
    /**
     * file
     */
    file: ApplyYaraRulesRequestBodyFile;
    isUnpackingRequired?: ApplyYaraRulesRequestBodyIsUnpackingRequiredEnum;
    rules: string[];
}
/**
 * Yara rules
 */
export declare class ApplyYaraRules200Wildcard extends SpeakeasyBase {
    result?: shared.ApplyYaraRule;
}
export declare class ApplyYaraRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
