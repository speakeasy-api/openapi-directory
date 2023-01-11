package openapisdk.models.shared;


public enum SectionEnum {
    ARTS("Arts"),
    AUTOMOBILES("Automobiles"),
    BLOGS("Blogs"),
    BOOKS("Books"),
    BUSINESS_DAY("Business Day"),
    EDUCATION("Education"),
    FASHION_AND_STYLE("Fashion & Style"),
    FOOD("Food"),
    HEALTH("Health"),
    JOB_MARKET("Job Market"),
    MAGAZINE("Magazine"),
    MEMBERCENTER("membercenter"),
    MOVIES("Movies"),
    MULTIMEDIA("Multimedia"),
    NY_PERCENT20_PERCENT2_F_PERCENT20_REGION("N.Y.%20%2F%20Region"),
    NYT_NOW("NYT Now"),
    OBITUARIES("Obituaries"),
    OPEN("Open"),
    OPINION("Opinion"),
    PUBLIC_EDITOR("Public Editor"),
    REAL_ESTATE("Real Estate"),
    SCIENCE("Science"),
    SPORTS("Sports"),
    STYLE("Style"),
    SUNDAY_REVIEW("Sunday Review"),
    T_MAGAZINE("T Magazine"),
    TECHNOLOGY("Technology"),
    THE_UPSHOT("The Upshot"),
    THEATER("Theater"),
    TIMES_INSIDER("Times Insider"),
    TODAY_S_PAPER("Today’s Paper"),
    TRAVEL("Travel"),
    US("U.S."),
    WORLD("World"),
    YOUR_MONEY("Your Money"),
    ALL_SECTIONS("all-sections");

    public final String value;

    private SectionEnum(String value) {
        this.value = value;
    }
}
