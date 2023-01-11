package openapisdk.models.shared;



public class PagespeedApiPagespeedResponseV4 {
    public String captchaResult;
    public PagespeedApiPagespeedResponseV4 withCaptchaResult(String captchaResult) {
        this.captchaResult = captchaResult;
        return this;
    }
    public PagespeedApiPagespeedResponseV4FormattedResults formattedResults;
    public PagespeedApiPagespeedResponseV4 withFormattedResults(PagespeedApiPagespeedResponseV4FormattedResults formattedResults) {
        this.formattedResults = formattedResults;
        return this;
    }
    public String id;
    public PagespeedApiPagespeedResponseV4 withId(String id) {
        this.id = id;
        return this;
    }
    public String[] invalidRules;
    public PagespeedApiPagespeedResponseV4 withInvalidRules(String[] invalidRules) {
        this.invalidRules = invalidRules;
        return this;
    }
    public String kind;
    public PagespeedApiPagespeedResponseV4 withKind(String kind) {
        this.kind = kind;
        return this;
    }
    public PagespeedApiPagespeedResponseV4LoadingExperience loadingExperience;
    public PagespeedApiPagespeedResponseV4 withLoadingExperience(PagespeedApiPagespeedResponseV4LoadingExperience loadingExperience) {
        this.loadingExperience = loadingExperience;
        return this;
    }
    public PagespeedApiPagespeedResponseV4PageStats pageStats;
    public PagespeedApiPagespeedResponseV4 withPageStats(PagespeedApiPagespeedResponseV4PageStats pageStats) {
        this.pageStats = pageStats;
        return this;
    }
    public Integer responseCode;
    public PagespeedApiPagespeedResponseV4 withResponseCode(Integer responseCode) {
        this.responseCode = responseCode;
        return this;
    }
    public java.util.Map<String, PagespeedApiPagespeedResponseV4RuleGroups> ruleGroups;
    public PagespeedApiPagespeedResponseV4 withRuleGroups(java.util.Map<String, PagespeedApiPagespeedResponseV4RuleGroups> ruleGroups) {
        this.ruleGroups = ruleGroups;
        return this;
    }
    public PagespeedApiImageV4 screenshot;
    public PagespeedApiPagespeedResponseV4 withScreenshot(PagespeedApiImageV4 screenshot) {
        this.screenshot = screenshot;
        return this;
    }
    public PagespeedApiImageV4[] snapshots;
    public PagespeedApiPagespeedResponseV4 withSnapshots(PagespeedApiImageV4[] snapshots) {
        this.snapshots = snapshots;
        return this;
    }
    public String title;
    public PagespeedApiPagespeedResponseV4 withTitle(String title) {
        this.title = title;
        return this;
    }
    public PagespeedApiPagespeedResponseV4Version version;
    public PagespeedApiPagespeedResponseV4 withVersion(PagespeedApiPagespeedResponseV4Version version) {
        this.version = version;
        return this;
    }
}