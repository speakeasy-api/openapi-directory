import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateTypoToleranceRequestBodyMinWordSizeForTypos extends SpeakeasyBase {
    oneTypo?: number;
    twoTypos?: number;
}
export declare class UpdateTypoToleranceRequestBody extends SpeakeasyBase {
    disableOnAttributes?: string[];
    disableOnWords?: string[];
    minWordSizeForTypos?: UpdateTypoToleranceRequestBodyMinWordSizeForTypos;
}
export declare class UpdateTypoToleranceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
