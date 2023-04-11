import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectBaseVO } from "./projectbasevo";
import { RfeBaseVO } from "./rfebasevo";
import { WorkgroupBaseVO } from "./workgroupbasevo";
/**
 * Java type: com.noosh.nooshapi.vo.EstimateBaseVO
 */
export declare class EstimateBaseVO extends SpeakeasyBase {
    createDate?: Date;
    currency?: string;
    estimateId?: number;
    estimateTitle?: string;
    expirationDate?: Date;
    /**
     * Java type: com.noosh.nooshapi.vo.ProjectBaseVO
     */
    project?: ProjectBaseVO;
    /**
     * Java type: com.noosh.nooshapi.vo.RfeBaseVO
     */
    rfe?: RfeBaseVO;
    status?: string;
    submitDate?: Date;
    /**
     * Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO
     */
    supplierWorkgroup?: WorkgroupBaseVO;
    transactionalCurrency?: string;
}
