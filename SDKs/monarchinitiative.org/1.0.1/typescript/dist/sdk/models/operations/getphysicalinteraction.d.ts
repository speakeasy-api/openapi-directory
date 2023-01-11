import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPhysicalInteractionQueryParams extends SpeakeasyBase {
    contributor?: string;
    title?: string;
}
export declare class GetPhysicalInteractionRequest extends SpeakeasyBase {
    queryParams: GetPhysicalInteractionQueryParams;
}
export declare class GetPhysicalInteractionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
