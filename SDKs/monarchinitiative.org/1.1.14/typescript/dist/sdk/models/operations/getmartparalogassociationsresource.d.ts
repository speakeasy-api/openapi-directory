import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetMartParalogAssociationsResourceRequest extends SpeakeasyBase {
    /**
     * subject taxon, e.g. NCBITaxon:9606
     */
    taxon1: string;
    /**
     * object taxon, e.g. NCBITaxon:9606
     */
    taxon2: string;
}
export declare class GetMartParalogAssociationsResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
