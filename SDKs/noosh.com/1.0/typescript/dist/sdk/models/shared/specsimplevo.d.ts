import { SpeakeasyBase } from "../../../internal/utils";
import { PersonVO } from "./personvo";
import { UofmSimpleVO } from "./uofmsimplevo";
/**
 * Java type: com.noosh.nooshapi.vo.SpecSimpleVO
 */
export declare class SpecSimpleVO extends SpeakeasyBase {
    clientStatus?: string;
    createDate?: Date;
    /**
     * Java type: com.noosh.nooshapi.vo.PersonVO
     */
    createdBy?: PersonVO;
    jobId?: number;
    lastUpdated?: Date;
    referenceNumber?: string;
    specId?: number;
    specName?: string;
    specOptionsComplete?: SpecSimpleVO[];
    supplierStatus?: string;
    uofms?: UofmSimpleVO[];
    userState?: string;
}
