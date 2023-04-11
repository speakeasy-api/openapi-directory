import { SpeakeasyBase } from "../../../internal/utils";
import { EstimateItemDetailsVO } from "./estimateitemdetailsvo";
import { ProjectBaseVO } from "./projectbasevo";
import { PropertyPaAndAttVO } from "./propertypaandattvo";
import { RfeBaseVO } from "./rfebasevo";
import { WorkgroupBaseVO } from "./workgroupbasevo";
/**
 * Java type: com.noosh.nooshapi.vo.EstimateDetailsVO
 */
export declare class EstimateDetailsVO extends SpeakeasyBase {
    comments?: string;
    createDate?: Date;
    currency?: string;
    customFields?: PropertyPaAndAttVO[];
    description?: string;
    estimateId?: number;
    estimateTitle?: string;
    expirationDate?: Date;
    items?: EstimateItemDetailsVO[];
    /**
     * Java type: com.noosh.nooshapi.vo.ProjectBaseVO
     */
    project?: ProjectBaseVO;
    referenceNumber?: string;
    /**
     * Java type: com.noosh.nooshapi.vo.RfeBaseVO
     */
    rfe?: RfeBaseVO;
    status?: string;
    submitDate?: Date;
    submittedBy?: string;
    submittedByUserId?: number;
    /**
     * Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO
     */
    supplierWorkgroup?: WorkgroupBaseVO;
    transactionalCurrency?: string;
}
