import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTrackCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare enum GetTrackCollectionEmbedEnum {
    ShareCode = "share_code",
    ShareUrl = "share_url"
}
export declare class GetTrackCollectionRequest extends SpeakeasyBase {
    /**
     * Which sharing information to include in the response, such as a URL to the collection
     */
    embed?: GetTrackCollectionEmbedEnum[];
    /**
     * Collection ID
     */
    id: string;
    /**
     * Code to retrieve a shared collection
     */
    shareCode?: string;
}
export declare class GetTrackCollectionResponse extends SpeakeasyBase {
    /**
     * OK
     */
    collection?: shared.Collection;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
