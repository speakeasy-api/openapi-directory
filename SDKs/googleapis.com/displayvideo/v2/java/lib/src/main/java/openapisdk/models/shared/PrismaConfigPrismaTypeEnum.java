package openapisdk.models.shared;


public enum PrismaConfigPrismaTypeEnum {
    PRISMA_TYPE_UNSPECIFIED("PRISMA_TYPE_UNSPECIFIED"),
    PRISMA_TYPE_DISPLAY("PRISMA_TYPE_DISPLAY"),
    PRISMA_TYPE_SEARCH("PRISMA_TYPE_SEARCH"),
    PRISMA_TYPE_VIDEO("PRISMA_TYPE_VIDEO"),
    PRISMA_TYPE_AUDIO("PRISMA_TYPE_AUDIO"),
    PRISMA_TYPE_SOCIAL("PRISMA_TYPE_SOCIAL"),
    PRISMA_TYPE_FEE("PRISMA_TYPE_FEE");

    public final String value;

    private PrismaConfigPrismaTypeEnum(String value) {
        this.value = value;
    }
}
