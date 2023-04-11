import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateTimeOffPeriodResponseDataAttributesCertificate extends SpeakeasyBase {
    status?: string;
}
export declare class CreateTimeOffPeriodResponseDataAttributesEmployeeAttributes extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    id?: number;
    lastName?: string;
}
export declare class CreateTimeOffPeriodResponseDataAttributesEmployee extends SpeakeasyBase {
    attributes?: CreateTimeOffPeriodResponseDataAttributesEmployeeAttributes[];
    type?: string;
}
export declare class CreateTimeOffPeriodResponseDataAttributesTimeOffTypeAttributes extends SpeakeasyBase {
    id?: number;
    name?: string;
}
export declare class CreateTimeOffPeriodResponseDataAttributesTimeOffType extends SpeakeasyBase {
    attributes?: CreateTimeOffPeriodResponseDataAttributesTimeOffTypeAttributes[];
    type?: string;
}
export declare class CreateTimeOffPeriodResponseDataAttributes extends SpeakeasyBase {
    certificate?: CreateTimeOffPeriodResponseDataAttributesCertificate;
    createdAt?: string;
    daysCount?: number;
    employee?: CreateTimeOffPeriodResponseDataAttributesEmployee;
    endDate?: string;
    halfDayEnd?: number;
    halfDayStart?: number;
    id?: number;
    startDate?: string;
    status?: string;
    timeOffType?: CreateTimeOffPeriodResponseDataAttributesTimeOffType;
}
/**
 * Time-off period resource name
 */
export declare enum CreateTimeOffPeriodResponseDataTypeEnum {
    TimeOffPeriod = "TimeOffPeriod"
}
export declare class CreateTimeOffPeriodResponseData extends SpeakeasyBase {
    attributes?: CreateTimeOffPeriodResponseDataAttributes;
    /**
     * Time-off period resource name
     */
    type?: CreateTimeOffPeriodResponseDataTypeEnum;
}
export declare class CreateTimeOffPeriodResponse extends SpeakeasyBase {
    data: CreateTimeOffPeriodResponseData;
    success: boolean;
}
