import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AutocompleteResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum AutocompleteResponseMessageEnum {
    Success = "Success"
}
export declare class AutocompleteResponseResult extends SpeakeasyBase {
    hits: any[];
}
/**
 * Success
 */
export declare class AutocompleteResponse extends SpeakeasyBase {
    code: AutocompleteResponseCodeEnum;
    message: AutocompleteResponseMessageEnum;
    result: AutocompleteResponseResult;
}
