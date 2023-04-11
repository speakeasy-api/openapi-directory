import { SpeakeasyBase } from "../../../internal/utils";
import { SupplierWorkgroupBasicVO } from "./supplierworkgroupbasicvo";
/**
 * Java type: com.noosh.nooshapi.vo.SupplierWorkgroupDetailVO
 */
export declare class SupplierWorkgroupDetailVO extends SpeakeasyBase {
    additionalWorkgroupsContainSameSupplier?: SupplierWorkgroupBasicVO[];
    buSupplierWorkgroupId?: number;
    buSupplierWorkgroupName?: string;
    clientWorkgroupId?: number;
    clientWorkgroupName?: string;
    isApproved?: boolean;
    supplierCode?: string;
    supplierWorkgroupId?: number;
    supplierWorkgroupName?: string;
}
