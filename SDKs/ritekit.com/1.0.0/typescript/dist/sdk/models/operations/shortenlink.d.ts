import { SpeakeasyBase } from "../../../internal/utils";
export declare class ShortenLinkQueryParams extends SpeakeasyBase {
    cta: number;
    url: string;
}
export declare class ShortenLinkRequest extends SpeakeasyBase {
    queryParams: ShortenLinkQueryParams;
}
export declare class ShortenLinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
