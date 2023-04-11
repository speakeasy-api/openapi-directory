import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The angle of rotation of the pages. Positive angles rotate the pages clockwise. Negative angles rotate the pages counter-clockwise.
 */
export declare enum RotatePagesV1RequestBodyAngleEnum {
    Zero = "0",
    Ninety = "90",
    OneHundredAndEighty = "180",
    TwoHundredAndSeventy = "270",
    Minus90 = "-90",
    Minus180 = "-180",
    Minus270 = "-270"
}
export declare class RotatePagesV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class RotatePagesV1RequestBody extends SpeakeasyBase {
    /**
     * The angle of rotation of the pages. Positive angles rotate the pages clockwise. Negative angles rotate the pages counter-clockwise.
     */
    angle: RotatePagesV1RequestBodyAngleEnum;
    /**
     * The input PDF document
     */
    file: RotatePagesV1RequestBodyFile;
    /**
     * The first page of the range to rotate in the PDF document. If empty, it defaults to the first page of the document.
     */
    firstPage?: number;
    /**
     * The last page of the range to rotate in the PDF document. If empty, it defaults to the last page of the document.
     */
    lastPage?: number;
}
/**
 * Error
 */
export declare class RotatePagesV14XXApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Record<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class RotatePagesV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The document was processed succesfully.
     */
    rotatePagesV1200ApplicationPdfBinaryString?: Uint8Array;
    /**
     * Error
     */
    rotatePagesV14XXApplicationProblemPlusJsonObject?: RotatePagesV14XXApplicationProblemPlusJson;
}
