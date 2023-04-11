import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVideoCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare enum GetVideoCollectionEmbedEnum {
    ShareCode = "share_code",
    ShareUrl = "share_url"
}
export declare class GetVideoCollectionRequest extends SpeakeasyBase {
    /**
     * Which sharing information to include in the response, such as a URL to the collection
     */
    embed?: GetVideoCollectionEmbedEnum[];
    /**
     * The ID of the collection to return
     */
    id: string;
    /**
     * Code to retrieve a shared collection
     */
    shareCode?: string;
}
export declare class GetVideoCollectionResponse extends SpeakeasyBase {
    /**
     * OK
     */
    collection?: shared.Collection;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
