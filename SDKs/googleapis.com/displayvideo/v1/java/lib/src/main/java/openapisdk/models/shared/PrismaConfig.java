package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrismaConfig
 * Settings specific to the Mediaocean Prisma tool.
**/
public class PrismaConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prismaCpeCode")
    public PrismaCpeCode prismaCpeCode;
    public PrismaConfig withPrismaCpeCode(PrismaCpeCode prismaCpeCode) {
        this.prismaCpeCode = prismaCpeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prismaType")
    public PrismaConfigPrismaTypeEnum prismaType;
    public PrismaConfig withPrismaType(PrismaConfigPrismaTypeEnum prismaType) {
        this.prismaType = prismaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplier")
    public String supplier;
    public PrismaConfig withSupplier(String supplier) {
        this.supplier = supplier;
        return this;
    }
}