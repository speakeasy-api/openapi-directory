package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerCommentsListByBlogSecurity {
    @SpeakeasyMetadata("security:option=true")
    public BloggerCommentsListByBlogSecurityOption1 option1;
    public BloggerCommentsListByBlogSecurity withOption1(BloggerCommentsListByBlogSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public BloggerCommentsListByBlogSecurityOption2 option2;
    public BloggerCommentsListByBlogSecurity withOption2(BloggerCommentsListByBlogSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}