package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPagesGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public BloggerPagesGetSecurityOption1 option1;
    public BloggerPagesGetSecurity withOption1(BloggerPagesGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public BloggerPagesGetSecurityOption2 option2;
    public BloggerPagesGetSecurity withOption2(BloggerPagesGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}