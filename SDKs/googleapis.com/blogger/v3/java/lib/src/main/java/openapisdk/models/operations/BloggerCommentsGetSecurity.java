package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerCommentsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public BloggerCommentsGetSecurityOption1 option1;
    public BloggerCommentsGetSecurity withOption1(BloggerCommentsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public BloggerCommentsGetSecurityOption2 option2;
    public BloggerCommentsGetSecurity withOption2(BloggerCommentsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}