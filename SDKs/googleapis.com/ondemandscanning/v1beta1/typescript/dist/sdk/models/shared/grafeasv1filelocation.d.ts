import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates the location at which a package was found.
 */
export declare class GrafeasV1FileLocation extends SpeakeasyBase {
    /**
     * For jars that are contained inside .war files, this filepath can indicate the path to war file combined with the path to jar file.
     */
    filePath?: string;
}
