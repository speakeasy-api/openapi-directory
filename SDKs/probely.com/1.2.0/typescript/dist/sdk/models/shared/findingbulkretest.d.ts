import { SpeakeasyBase } from "../../../internal/utils";
import { ScanProfileEnum } from "./scanprofileenum";
export declare class FindingBulkRetest extends SpeakeasyBase {
    /**
     * Array of finding ids
     */
    ids: string[];
    /**
     * * lightning - fast simple scan
     *
     * @remarks
     * * normal - default profile
     * * full - does everything the default profile does and adds boolean based
     * SQL injection tests
     * * safe - doesn't use any content changing methods (no POST, DELETE, etc)
     * and tries fewer payloads for SQL injection tests
     *
     */
    scanProfile?: ScanProfileEnum;
}
