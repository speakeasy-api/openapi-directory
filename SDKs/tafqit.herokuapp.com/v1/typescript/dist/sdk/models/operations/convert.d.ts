import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConvertRequestBody extends SpeakeasyBase {
    hundredsForm?: string;
    theNumber?: string;
    unit?: string;
}
export declare class ConvertRequest extends SpeakeasyBase {
    request?: ConvertRequestBody;
}
export declare class ConvertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
