import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMartOrthologAssociationsResourcePathParams extends SpeakeasyBase {
    taxon1: string;
    taxon2: string;
}
export declare class GetMartOrthologAssociationsResourceRequest extends SpeakeasyBase {
    pathParams: GetMartOrthologAssociationsResourcePathParams;
}
export declare class GetMartOrthologAssociationsResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
