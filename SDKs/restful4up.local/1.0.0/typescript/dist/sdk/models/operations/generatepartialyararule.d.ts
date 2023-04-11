import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GeneratePartialYaraRuleRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare enum GeneratePartialYaraRuleRequestBodyIsUnpackingRequiredEnum {
    True = "true",
    False = "false"
}
export declare class GeneratePartialYaraRuleRequestBody extends SpeakeasyBase {
    /**
     * file
     */
    file: GeneratePartialYaraRuleRequestBodyFile;
    isUnpackingRequired?: GeneratePartialYaraRuleRequestBodyIsUnpackingRequiredEnum;
    minimumStringLength?: string;
    stringsToIgnore?: string[];
}
/**
 * Yara rules
 */
export declare class GeneratePartialYaraRule200Wildcard extends SpeakeasyBase {
    rule?: shared.Yara;
}
export declare class GeneratePartialYaraRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
