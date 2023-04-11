import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFunctionPublicationAssociationsRequest extends SpeakeasyBase {
    /**
     * Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
     */
    evidence?: string[];
    /**
     * CURIE identifier of a GO term, e.g. GO:0044598
     */
    id: string;
    /**
     * number of rows
     */
    rows?: number;
    /**
     * beginning row
     */
    start?: number;
}
export declare class GetFunctionPublicationAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
