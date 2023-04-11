import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateFundingAccountRequestV2TypeEnum {
    Fbo = "FBO",
    WubsDecoupled = "WUBS_DECOUPLED",
    Private = "PRIVATE"
}
export declare class CreateFundingAccountRequestV2 extends SpeakeasyBase {
    /**
     * Required if type is either FBO or PRIVATE
     */
    accountName?: string;
    /**
     * Required if type is either FBO or PRIVATE
     */
    accountNumber?: string;
    /**
     * ISO 4217 currency code, Required if type is either WUBS_DECOUPLED or PRIVATE
     */
    currency?: string;
    name: string;
    payorId: string;
    /**
     * Required if type is either FBO or PRIVATE
     */
    routingNumber?: string;
    type: CreateFundingAccountRequestV2TypeEnum;
}
