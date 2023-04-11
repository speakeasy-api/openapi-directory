import { SpeakeasyBase } from "../../../internal/utils";
import { PrismaCpeCode } from "./prismacpecode";
/**
 * Required. The Prisma type.
 */
export declare enum PrismaConfigPrismaTypeEnum {
    PrismaTypeUnspecified = "PRISMA_TYPE_UNSPECIFIED",
    PrismaTypeDisplay = "PRISMA_TYPE_DISPLAY",
    PrismaTypeSearch = "PRISMA_TYPE_SEARCH",
    PrismaTypeVideo = "PRISMA_TYPE_VIDEO",
    PrismaTypeAudio = "PRISMA_TYPE_AUDIO",
    PrismaTypeSocial = "PRISMA_TYPE_SOCIAL",
    PrismaTypeFee = "PRISMA_TYPE_FEE"
}
/**
 * Settings specific to the Mediaocean Prisma tool.
 */
export declare class PrismaConfig extends SpeakeasyBase {
    /**
     * Google Payments Center supports searching and filtering on the component fields of this code.
     */
    prismaCpeCode?: PrismaCpeCode;
    /**
     * Required. The Prisma type.
     */
    prismaType?: PrismaConfigPrismaTypeEnum;
    /**
     * Required. The entity allocated this budget (DSP, site, etc.).
     */
    supplier?: string;
}
