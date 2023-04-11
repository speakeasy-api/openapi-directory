import { SpeakeasyBase } from "../../../internal/utils";
import { TagVO } from "./tagvo";
/**
 * Java type: com.noosh.nooshapi.vo.file.FileVO
 */
export declare class FileVO extends SpeakeasyBase {
    description?: string;
    downloadLink?: string;
    fileId?: number;
    fileName?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    fileSize?: any;
    fileType?: string;
    isRemote?: boolean;
    modifiedDate?: string;
    tagList?: TagVO[];
    uploadDate?: string;
    uploadedBy?: string;
}
