import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportAssetsNmapXMLSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ExportAssetsNmapXMLRequest extends SpeakeasyBase {
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class ExportAssetsNmapXMLResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * filtered asset results
     */
    exportAssetsNmapXML200TextXMLBinaryString?: Uint8Array;
}
