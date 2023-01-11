import { SpeakeasyBase } from "../../../internal/utils";
export declare class AutoEmojifyQueryParams extends SpeakeasyBase {
    text: string;
}
export declare class AutoEmojifyRequest extends SpeakeasyBase {
    queryParams: AutoEmojifyQueryParams;
}
export declare class AutoEmojifyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
